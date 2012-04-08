<!DOCTYPE HTML>
<html lang="{{lang}}">
<head>
  <meta charset="UTF-8">
  <title>{{title}}</title>
  <link href='http://fonts.googleapis.com/css?family=Exo:300&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="/static/css/style.css"/>
</head>
<body>

  <header>
  	<h1>Wiki rewizor</h1>
  </header>
  <br />

  <canvas id="paper" width="900" height="600"></canvas>
  
  <script src="/static/js/jquery-1.7.1.min.js"></script>
  <script src="/static/js/protovis.js"></script>
  <script src="/static/js/processing-1.3.6.min.js"></script>
  <!-- change to minified version in deployment
  <script src="/static/js/protovis.min.js"></script> -->
  <script src="/static/js/graph.js"></script>
  <script src="/static/js/app.js"></script>
  <script src="/static/js/diagram.js"></script>
  <script src="/static/js/store.js"></script>

  <script type="text/javascript" language="javascript">
  // <![CDATA[
    _graph.draw_graph( {{data}}, {{query}} );
  // ]]>
  </script>
</body>
</html>
