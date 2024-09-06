# JavaScript moderno

Curso de **Fernando Herrera**.

---

## PROYECTOS

- **01 Fundamentos**: bases de JavaScript, Ciclos y Clases.

- **02 BlackJack** en Vanilla JavaScript.

![image](https://github.com/user-attachments/assets/09ca457d-2e3f-4d58-98e3-5c40b687e8c3)

- **03 BlackJack Vite** en Vanilla JavaScript creando el proyecto en Vite.

![image](https://github.com/user-attachments/assets/a234dbb3-6e5c-4231-9fbd-ab7749d6d91a)

- **04 Todo App** una aplicación de Tareas creada con Vite.

Donde se pueden marcar como completadas las tareas:

![image](https://github.com/user-attachments/assets/199906c5-71b4-4017-9fbf-dd1eda72bb87)

Y filtras por los estados: Pendiente, Completadas y el listado de todas:

![image](https://github.com/user-attachments/assets/22ce63c8-6805-4f88-a434-ebc885221583)

- **05 Advanced** con algunos ejercicios:

-01-environments, para ver las variables de entorno.

![image](https://github.com/user-attachments/assets/8cf30611-7bf3-450c-8d9c-322535646cfa)

Y demás temas vistos como: callbacks, promises, async/await, for await, funciones generadoras, etc.

- **06-http-app**: **Peticiones HTTP** para usar **fetch API** de JavaScript

- **07 CRUD**, donde se ve:

```
-Operaciones CRUD: Create, Read, Update, Delete
-Sin frameworks o librerías externas
-Modals
-Mappers
-Clases
-Utilizar conversiones
-Código limpio
-Comprender las funcionalidades básicas de un Restful API de un backend
-Montar un backend de pruebas
-Generar y utilizar un store central para nuestro estado de la aplicación
-Documentación de funciones
```

-Listado de los usarios:

![image](https://github.com/user-attachments/assets/27b3d32e-6c1e-4c9f-a72a-281570bcc201)

-Creación de un nuevo usuario:
![image](https://github.com/user-attachments/assets/d90338ea-df2c-44f9-901a-e494fe59c4f1)


---
---
## Instalaciones recomendadas - Curso de JavaScript

1. Instalar Node
[Sitio oficial de node](https://nodejs.org/es/)

2. Instalar VSCode
[Editor Visual Studio Code](https://code.visualstudio.com/)

3. Instalar Google Chrome [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)

4. Descargar e instalar [Postman](https://www.postman.com/downloads/)

---

## Extensiones de VSCode

[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

---

## Extensiones de Chrome

[Json Viewer Pro](https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc?pli=1)

---

## Extensiones útiles de VSCode

* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

* [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

---
---

## Palabras reservadas

```
break - export - super -
case - extends - switch -
catch - finally - this -
class - for - throw -
const - function - try -
continue - if - typeof -
debugger - import - var -
default - in - void -
delete - instanceof - while -
do - new - with -
else - return - yield - let -
enum - package - public -
implements - private - static -
interface - protected - await 
```

## Evitar usar

```
null - undefined - true -
false - hasOwnProperty - 
isNaN - Infinity - isFinite -
NaN - length - Math -
isPrototypeOf - prototype - valueOf -
name - Number - Object -
String - toString - prompt -
alert - conform
```

---

## Para minificar el codigo

[https://www.toptal.com/developers/javascript-minifier](https://www.toptal.com/developers/javascript-minifier), copiamos el codigo de JavaScript (que va a ser el codigo de desarrollo) y copiamos el que nos da minimificado (para produccion)

---

## Vite

1. Crear el proyecto inicializando **Vite**:

```BASH
npm create vite
```

2. Completar con...

... el nombre

... si usamos JS/React/Vue/etc

... si usamos JS/TS.

3. Entramos a la carpeta creada y:

```BASH
npm install
npm run dev
```

Y se puede ver en un navegador en: [http://localhost:5173/](http://localhost:5173/)

- Es una **aplicación de Node**, por eso tenemos los `node_modules` y el archivo `package.json`.

- Para hacer el build: 
```BASH
npm run build
```

---
---

## GIT: GITHUB y GITHUB PAGES


1. Instalar **Git**

2. Configurar el usuario con `git config --global "nombre de usuario"` e email: `git config --globa l"example@email.com"`. Asi cuando se hace el commit estará este user y e-mail.

3. Creamos un nuevo repositorio en GitHub, lo nombremos, agregamos descripcion, detallamos privado/publico, detallamos si incluimos readme o no y queda creado.

4. Vualvo a mi proyecto local, con `git init` voy a inicializar **git**.

5. `git add .`, paso mis archivos al stage area y hago el commit: `git commit -m "aca el mensaje del commit"`.

6. Renombro la rama principal como main: `git branch -M main`.

7. `git remote add origin https://github.com/eugenia1984/...` lo relaciono con el repositorio creado.

8. `git push -u origin main`, subo mis cambios.

9. Al recargar GitHub voy a ver mis archivos locales en el repositorio


10. Luego de hacer el build con `npm run build`renombramos la carpeta `dist` por `docs`.

11. Voy a la parte de `pages` en **source**: `Deploy from a branch`. En **branch**: `main` / `/docs`, que es la carpeta que renombre del build. Para tener la página el repositorio debe ser publico (si es privado no se puede). Y me muestra la URL del codigo.

12. Creo el archivo `vite.config.js` que es archivo de configuración de Vit, porque sino como GitHub me despliega el projecto a partir de una subcarpeta, no voy a ver las imagenes ni el css, porque estaba como ruta relativa. Si esto fuera una aplicación con React este archivo ya viene.

```JavaScript
import { defineConfig } from "vite";

export default defineConfig({
  base: '/nombre-del-repositorio/'
});
```

En el **Base** debo agregar el nombre del directorio, y ahora si se va a ver todo, cuando nuevamente haga un `npm run build`.

Se dispara un GitHub Action y hace un nuevo deploy del proyecto.

---

### Git Cheat Sheet

#### Install

- GitHub for Windows: [https://windows.github.com](https://windows.github.com)

- GitHub for Mac: [https://mac.github.com](https://mac.github.com)

- Git for All Platforms: [http://git-scm.com](http://git-scm.com)

Git distributions for Linux and POSIX systems are available on the official Git SCM web site.

#### Configure tooling

Configure user information for all local repositories

`$ git config --global user.name "[name]"`-> Sets the name you want attached to your commit transactions

`$ git config --global user.email "[email address]"`-> Sets the email you want attached to your commit transactions

`$ git config --global color.ui auto`-> Enables helpful colorization of command line output

#### Branches

Branches are an important part of working with Git. Any
commits you make will be made on the branch you're currently
“checked out” to. Use git status to see which branch that is

`$ git branch [branch-name]`-> Creates a new branch

`$ git checkout [branch-name]`-> Switches to the specified branch and updates the working directory

`$ git merge [branch]`-> Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is an important Git operation.

`$ git branch -d [branch-name]` -> Deletes the specified branch


#### Create repositories

When starting out with a new repository, you only need to do it once; either locally, then push to GitHub, or by cloning an existing repository

`$ git init`-> Turn an existing directory into a git repository

`$ git clone [url]`-> Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commit


####  The .gitgnore file

Sometimes it may be a good idea to exclude files from being
tracked with Git. This is typically done in a special file named `.gitignore`. You can find helpful templates for .gitignore files at [github.com/github/gitignore](github.com/github/gitignore).

#### Synchronize changes

Synchronize your local repository with the remote repository
on GitHub.com

`$ git fetch`-> Downloads all history from the remote tracking branches

`$ git merge`-> Combines remote tracking branch into current local branch

`$ git push`-> Uploads all local branch commits to GitHu`

`$ git pull`-> Updates your current local working branch with all new
commits from the corresponding remote branch on GitHub.  `git pull` is a combination of `git fetch` and `git merge`.

#### Make changes

Browse and inspect the evolution of project files

`$ git log`-> Lists version history for the current branch

`$ git log --follow [file]`-> Lists version history for a file, including renames.

`$ git diff [first-branch]...[second-branch]`-> hows content differences between two branches.

`$ git show [commit]`-> Outputs metadata and content changes of the specified commit.

`$ git add [file]`-> Snapshots the file in preparation for versioning

`$ git commit -m "[descriptive message]"`-> Records file snapshots permanently in version history.

#### Redo commits

Erase mistakes and craft replacement history

`$ git reset [commit]`-> Undoes all commits after [commit], preserving changes locally

`$ git reset --hard [commit]`-> Discards all history and changes back to the specified commit.

CAUTION! Changing history can have nasty side effects. If you
need to change commits that exist on GitHub (the remote),
proceed with caution. If you need help, reach out at
github.community or contact support.

#### Glosary

- git: an open source, distributed version-control system

- GitHub: a platform for hosting and collaborating on Git repositories

- commit: a Git object, a snapshot of your entire repository compressed into a SHA

- branch: a lightweight movable pointer to a commit

- clone: a local version of a repository, including all commits and branches

- remote: a common repository on GitHub that all team member use to exchange their changes

- fork: a copy of a repository on GitHub owned by a different user

- pull request: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated
tests, and more

- HEAD: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits
when using git checkout

---
