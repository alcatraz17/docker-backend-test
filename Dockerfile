FROM node:20
RUN echo "We are going to do cool things here! 🚀"
WORKDIR /app/backend
COPY package*.json /app/backend
RUN npm install
EXPOSE 3030
COPY . /app/backend
ENV PORT=3030
ENV TEST="Hello backend!"
ENV VAR1=$VAR1
CMD ["npm", "start"]
RUN echo "Backend is ready! 🎉"