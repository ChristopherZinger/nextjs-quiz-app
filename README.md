# Quiz Creator Webapp 

## Commands
- `npx prisma generate`
- `npx prisma studio`

## Run dev env

- 1 Start Postgres Docker Container 
  - ( On windows ) open docker desktop application.
  - `npm run start-docker-db` // if docker container already exists 
  - `npm run start-new-docker-db` // otherwise
  - `npm run dev` // run nextjs app
<br /><br />
- 2 Generate graphql resolvers, schema and queries
  - `npm run generate:all`
  - or if not all generations are needed:
  - `npm run generate:prisma`
  - `npm run generate:schema`
  - `npm run generate:gql`
