
docker build . -t matula-sprawozdanie1 
docker run -p 8080:8080 -d matula-sprawoizdanie1

w celu zbudowania obrazu nalezy uzyc komendy docker images, skopiowac ID 
obrazu matula-sprawozdanie1 i uzyc komendy

docker run -p 8080:8080 -d <id-obrazu>

aby uzyskac informacje z punktu 1a nalezy uzyc komendy docker ps, skopiowac ID
kontenera i nastepnie uzyc komendy

docker logs <id-kontenera>

aby uzyskac informacje o liczbie warstw obrazu nalezy uzyc komendy

docker inspect <id-obrazu>

PS. plik dockerignore zostal dodany aby lokalne pliki node_modules i npm-debug nie zostaly
skopiowane do obrazu dockera potencjalnie nadpisujac instalowane moduly