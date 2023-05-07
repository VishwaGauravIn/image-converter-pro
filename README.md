<div align="center">
 <h1> <img src="https://user-images.githubusercontent.com/81325730/197384318-a9e33a16-fcd3-4b40-880d-8484f0ee2dff.png" width="80px"><br/>Image Converter Pro</h1>
 <a href="https://itsvg.in" target="_blank"><img src="https://img.shields.io/badge/Creator-Vishwa%20Gaurav-blue?style=plastic"/></a> 
 <img src="https://img.shields.io/npm/v/image-converter-pro?label=%20&style=plastic"/>
 <img src="https://img.shields.io/npm/dt/image-converter-pro?style=plastic">
 <img src="https://img.shields.io/snyk/vulnerabilities/github/VishwaGauravIn/image-converter-pro?style=plastic"/>
 <img src="https://img.shields.io/badge/License-Apache-brightgreen?style=plastic"/>
 <img src="https://img.shields.io/github/languages/code-size/VishwaGauravIn/image-converter-pro?logo=github&style=plastic">
</div>

# image-converter-pro
Convert any image into jpeg, gif, png, svg, bmp or ico directly from your web browser with advanced features such as scale up images.

## How to Install ?
Use npm or yarn to install this npm package
```
npm i image-converter-pro --force
```

## Example Code :
Example code with **download** functionality

```js
import imgConverter from "image-converter-pro";

    let image = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgaGVpZ2h0PSczMDBweCcgd2lkdGg9JzMwMHB4JyAgZmlsbD0iIzAwMDAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCA1LjU1NiAxMDAgODguODg5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgNS41NTYgMTAwIDg4Ljg4OSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTkwLDE2LjY2N1Y1LjU1Nkg1NS41NTZ2MTEuMTExSDQ0LjQ0NFY1LjU1NkgxMHYxMS4xMTFINy42NDFIMFY1MGg3LjY0MUgxMHYxMi4yMjNoMTEuMTExdjEwaDExLjExMXYxMi4yMjJoMTEuMTExdjEwDQoJCWgxMy4zMzN2LTEwaDExLjExVjcyLjIyM2gwLjk5NGgxMC4xMTd2LTEwSDkwVjUwaDIuMjgzSDEwMFYxNi42NjcgTTI0LjQ0NCwyOS4wMTZ2MTIuMDk2SDExLjExMVYyOS4wMTZWMTcuNzc4aDEzLjMzM1YyOS4wMTZ6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="
    
    imgConverter(image, 50, 50, "png", 1).then(
          (dataUri) => {
            let link = document.createElement("a");
            link.download = "download.png";
            link.href = dataUri;
            link.click();
          }
        )
```

## parameters
| Parameter  |      Description      |  Default Value |  type |
|:----------|:-------------|:------:|------:|
| image |  Image Url or Data Url/Uri | null | any |
| width |    Original Width of Image  |   500 | number |
| height | Original Height of Image |    500 | number |
| format | "jpeg", "gif", "png", "bmp", "svg", "ico"  | "png" | string |
| scale |    Amount of scale, for example if I want image to be 50% of it's size then I will use 0.5   |   1 | number |

[</> with 💛 Vishwa Gaurav](https://itsvg.in)
