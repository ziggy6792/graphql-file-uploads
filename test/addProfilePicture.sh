curl --location --request POST 'http://localhost:4000/graphql' \
  --form 'operations="{\"query\":\"mutation addProfilePicture($picture: Upload!){\\n  addProfilePicture(picture: $picture)\\n}\"}"' \
  --form 'map="{ \"0\" : [\"variables.picture\"]}"' \
  --form '0=@"picture.jpeg"'
