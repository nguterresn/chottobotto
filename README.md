# chottobotto
open source bot helper for your website

![Captura de ecrã 2020-08-11, às 21 52 49](https://user-images.githubusercontent.com/38976366/89947869-09838d00-dc1d-11ea-921a-b2f219e4baa8.png)
![Captura de ecrã 2020-08-11, às 21 54 07](https://user-images.githubusercontent.com/38976366/89947968-346de100-dc1d-11ea-8ec1-f54289935aff.png)


### Add files
#### import js file to hmtl
On ES6 Modules:

```
import Chottobotto from './main.js'
```

#### import css file to html
```
<link rel="stylesheet" href="chottobotto.css">
```

### Methods
Start by creating the chottobotto object:

```
const cb =  new Chottobotto();
```

Then to change the title of the div, simply:

```
cb.ChangeTitle("What's the problem?");
```

Finally to add multiple options you need to call:

```
cb.AddOption("Prices", "Our prices are on the tab in the upper right corner. You can check them or send us an email.");
cb.AddOption("Availability", "Our company is open 24/7, we are some crazyyy f*ing dudes.");
```
