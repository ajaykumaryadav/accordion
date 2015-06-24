#Accordion [v1.0.3]
*An Accordion library in js for your websites that can be customized easily with overwriting the variable*

###Try it out:
-[Demo](http://ajaykumaryadav.github.io/plugins/accordion/)

## Get Started

Get the library using one of the following ways:

1. **Github**

 - [unminified] : https://raw.githubusercontent.com/ajaykumaryadav/accordion/master/js/accordion.js
 - [minified] : https://raw.githubusercontent.com/ajaykumaryadav/accordion/master/js/accordion-min.js

## Variable
Now include the library in the *HEAD* of your page:

Any element on your page which needs to have a accordion just follow the bellow structure

##Basic Structure
```sh
<ul>
  <li>
    <div class='topWrap'></div> //It is used as a header for accordion
    
    <div class='details'></div> // It is used to show the details with respective to each accoridion
    
    // You can change the 'topWrap' & details' class name as per you need, then you just need to pass the class name.
  </li>
  .
  .
  .
  <li>
    ...
  </li>
</ul>  
```

### Defaults variables
You can overwrite the default varibale in function call
```sh
    var defaults = {
      tabClick: ".topWrap", \\ tabClick for header of the accordion (Basicly for the click)
      tabContent: ".details", \\ tabContent for details of the respective header (accordion)
      accordAnimation: 1000, \\ accordAnimation is the animation time to open the accordion
      bodyAnimation: 1000, \\ bodyAnimation is the animation time for body to take while sliding
      spaceTop: 0
    };
```

###Basic function call
```sh
<script type="text/javascript">
  $(document).ready(function(){
    $("ul").accordion();
  });
</script>
```

###Customize function call
```sh
<script type="text/javascript">
  $(document).ready(function(){
    $("ul").accordion({
      tabClick: ".topWrap", // Class or ID on which you want to open the content
      tabContent: ".details", // Class or ID which tells the content to show on click
      accordAnimation: "2000",  // animation time
      bodyAnimation: "2000", // body slide animation time
      spaceTop: "0" // spaceTop is uesd to maintain the offset from top (eg 100,50 etc). Wrong way (100px, 20px, 10%, etc)
    });
  });
</script>
```

## Browser Support
**accordion-min.js** works on all latest browsers, though the jquery animation effect had used so it supports in all the below browser.

- Chrome 
- Firefox
- Opera
- Safari
- IE 

## License
Copyright (c) 2014 Ajay Kumar Yadav
Licensed under the [MIT license](http://opensource.org/licenses/MIT).
