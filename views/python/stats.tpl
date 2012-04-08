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
      <h1 style="float: left;"><a href="/">Wiki rewizor</a></h1>
      <a href="/">
        <p style="float: right; margin-top: 12px;" class="button">Zacznij od nowa</p>
      </a>
      <p style="clear: both;">Lista haseł wyszukiwanych przez użytkowników</p>
    </header>

    <br />

    <section id="query" style="overflow: auto; width: 80%;" class="left">
    % for position in data:
        <h2>{{position['lang']}}</h2>
        % for query in position['queries']:
            <p style="margin-left: 15px;"><a href="/graph/{{position['lang']}}/{{query}}">{{query}}</a></p>
        </h2>
        % end
    % end
    </table>
    </section>

  </body>
</html>
