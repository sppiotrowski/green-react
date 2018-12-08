ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
IMAGE:=sppiotrowski/green-react
GIT_SHA=$(shell git rev-parse HEAD)

build_start: build_dev start

build_dev:
	docker build -t $(IMAGE):latest -f Dockerfile.dev .

start:
	docker run -p 3000:3000 -v /app/node_modules -v "$(ROOT_DIR)":/app $(IMAGE):latest

test:
	docker run -it $(IMAGE):latest yarn test

compose:
	docker-compose up --build

test_coverage:
	docker run $(IMAGE):latest yarn test --coverage

build_prod:
	docker build -t $(IMAGE)-prod:latest -t $(IMAGE)-prod:$(GIT_SHA) .

start_prod:
	docker run -p 3000:3000 $(IMAGE)-prod:latest

kill:
	docker kill $(shell docker ps -q)

clean:
	rm -rf ./node_modules ./build
	docker system prune
	docker image rm $(IMAGE):latest
