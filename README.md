# chottobotto
open source bot for your website

### Add files
#### import js file to hmtl

```
<link rel="stylesheet" href="chottobotto.css">
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
