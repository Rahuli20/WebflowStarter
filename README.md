Just an empty starter for writing JS in Webflow using Vite ✌️

### Development

Add to Webflow custom code (before </body>):

```html
<script type="module" src="http://localhost:5173/@vite/client"></script>
<script type="module" src="http://localhost:5173/src/main.js"></script>
```

### Production

After building, add to Webflow custom code:

```html
<script type="module" src="https://domain.com/main.js"></script>
```
