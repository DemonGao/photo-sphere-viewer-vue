# vue3.0版本 photo-sphere-viewer使用


核心代码
```vue
import { Viewer } from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

psViewer.value = new Viewer({
    container: document.querySelector('#viewer'),
    panorama: imageRef.value.src
})

}
```

# 注意:
panorama 需要使用的图片地址.
1) 静态图片  使用 require('...文件路径')
2) 外链图片  通过外链地址, 转canvas 读取 base64, 放入到img.src中, 然后在onload时, 调用new Viewer(), panorama 指向元素的src

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint   
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
