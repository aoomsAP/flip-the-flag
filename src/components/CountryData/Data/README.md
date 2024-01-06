# country data components

Because the data from the API is formatted in different ways (Arrays, Dictionaries, etc), 
and there is occasionally added complexity because of the language settings of the website, 
the translation of the API to a string of text can be a handful, 
and often ends up being a few lines of code.

Therefore, it was advised to store the data as a string in different components, 
so the data can be easily applied to several parts of the project.

So, even though these components aren't contained HTML elements, 
they are independent and reusable pieces of code.

By not wrapping them in a specific HTML element, 
data from the API can be easily inserted in 
any element (<li>, or <p>, or <td>, etc) during implementation.