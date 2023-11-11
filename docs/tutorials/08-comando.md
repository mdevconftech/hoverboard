## 
```bash
npm ci
npx firebase login
npx firebase use mdevconf-2023
# Borrar las colecciones
npx firebase firestore:delete --recursive --all-collections
# subir los datos que se modificaron
npm run firestore:init
npm start
npm run deploy
````
