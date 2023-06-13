# Tip: I created a Makefile for this

# specify the node base image with your desired version node:<version>
FROM    node:alpine

# replace this with your application's default port
EXPOSE 3333

# Install build-essential (to create C++ projects), vim, curl and zsh
# run apt-get clean to clean the package cache and free up space
# rm -rf any lists that are no longer needed after åinstalling the packages

# Install Zsh and other required dependencies
RUN apk update && apk add --no-cache zsh git

# Set Zsh as the default shell
SHELL ["/bin/zsh", "-c"]

RUN     npm install -g @nestjs/cli

# Install Oh My Zsh, because I want to
RUN        sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Change the zsh prompt so I can identify the container easily
RUN     echo 'PROMPT="%F{yellow}🌞 [nestJS]%F{default}@%F{cyan}%c%F{default} "' > ~/.zshrc

# Create the directory we will be working from
RUN        mkdir /nestjs-api-tutorial

# Set that directory as the start directory
WORKDIR    /nestjs-api-tutorial

# Notify that a volume will be needed when running the container
VOLUME    [ "/nestjs-api-tutorial" ]

# Get into the container with zsh
#CMD        [ "zsh" ]
CMD [ "zsh", "-c", "echo '📢 Ça va être tout noir !\n'; zsh" ]