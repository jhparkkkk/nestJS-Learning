IMAGE_NAME := nest-img
CONTAINER_NAME := nest-contnr
PORT := 3333
PROJECT_FOLDER := $(abspath $(CURDIR)/..)

all: build clear run

build:
	@docker build -t ${IMAGE_NAME} .

run:
	@docker run --rm -it --name ${CONTAINER_NAME} \
	-p 3333:3333 \
	--volume ${PROJECT_FOLDER}:/nestjs-api-tutorial \
	${IMAGE_NAME}

clean:
	@docker stop $$(docker ps -qa);\
	docker rm $$(docker ps -qa);\
	docker rmi -f $$(docker images -qa);\
	docker volume rm $$(docker volume ls -q);

re: clean all

clear:
	@clear -x

.PHONY: all run build clean re clear 


