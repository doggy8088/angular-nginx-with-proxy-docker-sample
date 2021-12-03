# Demo1

## How to run!

### Create a new docker image
```bash
docker build -t test:dev .
```

### Run the image
```bash
docker run --rm -e BACKEND_URI="https://dog.ceo" -p 7070:80 test:dev
```
