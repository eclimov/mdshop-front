up:
	docker-compose up

up-prod:
	docker-compose -f docker-compose.prod.yml up

stop:
	docker-compose stop

webserver:
	docker-compose exec webserver sh

app:
	docker-compose exec app sh

rebuild:
	docker-compose up -d --build --force-recreate

logs:
	docker-compose logs -f
