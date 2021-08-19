# XSS-Simulator
This is a simple project in Javascript that simulate a insecure web page, allowing malicous scripts in a field form.

To simulate a reflected attack:
1. Start application
`$ npm start`
2. Open http://localhost:3000 in your web browser
3. Insert `<script>alert('HACKER HERE')</script>` on comment input and click on send button.