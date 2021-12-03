# Demo1

This project is an example of how is the correct way to use angular and nginx proxy.
Angular version: `6`

## How to run!

### Create a new docker image
```bash
docker build -t test:dev .
```

### Run the image

```bash
docker run --rm -e BACKEND_URI="https://dog.ceo" -p 7070:80 test:dev
```
