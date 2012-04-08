<!DOCTYPE HTML>
<html lang="{{html_lang}}">
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

  <article>
    <canvas id="paper" width="900" height="600"></canvas>
  </article>
  
  <script src="/static/js/processing-1.3.6.min.js"></script>
  <script src="/static/js/graph.js"></script>
  <script type="text/javascript" language="javascript">
  // <![CDATA[
    %if data2:
      _graph.draw_graph( [{ data: {{!data1}}, query: "{{!query1}}", lang: "{{!lang1}}" },
                          { data: {{!data2}}, query: "{{!query2}}", lang: "{{!lang2}}" } ] );
    %else:
      _graph.draw_graph( [{ data: {{!data1}}, query: "{{!query1}}", lang: "{{!lang1}}" }] );
    %end
  // ]]>
  </script>
</body>
</html>
