dev: build_dev run_dev

build_prod:
	docker build -t sppiotrowski/green-react:latest .

run_prod:
	docker run \
		-p 3000:3000 \
		sppiotrowski/green-react:latest

build_dev:
	docker build \
		-t sppiotrowski/green-react-dev:latest \
		-f Dockerfile.dev .
run_dev:
	docker run \
		-p 3000:3000 \
		-v /app/node_modules \
		-v "$(pwd)":/app sppiotrowski/green-react-dev:latest
test:
	docker run sppiotrowski/green-react-dev:latest yarn test -- --coverage

test_it:
	docker run -it sppiotrowski/green-react-dev:latest yarn test

compose:
	docker-compose up --build

clean:
	rm -rf ./node_modules ./build
	docker system prune
