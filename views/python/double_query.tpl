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
      <p>Wybierz interesujące cię hasło oraz wersję językową Wikipedii</p>
    </header>

    <br />

    <section id="query" style="overflow: auto; width: 30%;" class="left">
      <form id="query-form">
        <table>
          <tbody>
            <tr>
              <td>{{phrase}}</td>
              <td>
                <input type="text" id="query-field" class="sep-r">
              </td>
            </tr>
            <tr>
              <td>{{language}}</td>
              <td>
                <select name="choose-lang" id="lang-field" class="sep-r">
                  <option value="pl">polski</option>
                  <option value="en">angielski</option>
                  <option value="de">niemiecki</option>
                  <option value="fr">francuski</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div id="query-button" class="left button sep-l">{{query_button}}</div>
      </form>
    </section>

    <br class="clear"/> 

    <section id="results" style="overflow: auto; width: 69%;" class="right">
      <ul id="results-propositions">
        <!-- result placeholder -->
      </ul>
    </section>
    <section id="query" style="overflow: auto; width: 30%;" class="left">
      <form id="query-form">
        <table>
          <tbody>
            <tr>
              <td>{{phrase}}</td>
              <td>
                <input type="text" id="query-field" class="sep-r">
              </td>
            </tr>
            <tr>
              <td>{{language}}</td>
              <td>
                <select name="choose-lang" id="lang-field" class="sep-r">
                  <option value="pl">polski</option>
                  <option value="en">angielski</option>
                  <option value="de">niemiecki</option>
                  <option value="fr">francuski</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div id="query-button" class="left button sep-l">{{query_button}}</div>
      </form>
    </section>

    <section id="results" style="overflow: auto; width: 69%;" class="right">
      <ul id="results-propositions">
        <!-- result placeholder -->
      </ul>
    </section>

    <script src="/static/js/jquery-1.7.1.min.js"></script>
    <script src="/static/js/app.js"></script>
    <script src="/static/js/store.js"></script>

    <script type="text/javascript" language="javascript">
    // <![CDATA[
    _app.init();
    // ]]>
    </script>
  </body>
</html>
