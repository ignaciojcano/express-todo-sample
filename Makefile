install:
	docker-compose run --rm install
dev:
	docker-compose up -d api
all: install dev
