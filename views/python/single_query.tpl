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
      <p style="clear: both;">Wybierz interesujące cię hasło oraz wersję językową Wikipedii</p>
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
                  <option value="pl">______________</option>
                  <option value="af">Afrikaans</option>
                  <option value="als">Alemannisch</option>
                  <option value="an">Aragonés</option>
                  <option value="ang">Englisc</option>
                  <option value="ara">Беларуская</option>
                  <option value="ast">Asturianu</option>
                  <option value="be">Беларуская</option>
                  <option value="bg">Български</option>
                  <option value="bokm">Norsk</option>
                  <option value="bs">Bosanski</option>
                  <option value="ca">Català</option>
                  <option value="co">Corsu</option>
                  <option value="cs">Čeština</option>
                  <option value="csb">Kaszëbsczi</option>
                  <option value="cu">Словѣньскъ</option>
                  <option value="da">Dansk</option>
                  <option value="de">Deutsch</option>
                  <option value="dsb">Dolnoserbski</option>
                  <option value="eml">Emilià</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="ext">Estremeñu</option>
                  <option value="fo">Føroyskt</option>
                  <option value="fr">Français</option>
                  <option value="frp">Arpitan</option>
                  <option value="frr">Frasch</option>
                  <option value="fur">Furlan</option>
                  <option value="fy">Frysk</option>
                  <option value="gl">Galego</option>
                  <option value="got">Gutisk</option>
                  <option value="hr">Hrvatski</option>
                  <option value="hsb">Hornjoserbsce</option>
                  <option value="is">Íslenska</option>
                  <option value="it">Italiano</option>
                  <option value="la">Latina</option>
                  <option value="lad">Judæo-Español</option>
                  <option value="lb">Lëtzebuergesch</option>
                  <option value="li">Limburgs</option>
                  <option value="lij">Líguru</option>
                  <option value="lmo">Lumbaart</option>
                  <option value="mk">Македонски</option>
                  <option value="mwl">Mirandés</option>
                  <option value="nap">Nnapulitano</option>
                  <option value="nds">Plattdüütsch</option>
                  <option value="nl">Nederlands</option>
                  <option value="nn">Norsk nynorsk</option>
                  <option value="nrm">Nouormand/Normaund</option>
                  <option value="oc">Occitan</option>
                  <option value="pcd">Picard</option>
                  <option value="pfl">Pfälzisch</option>
                  <option value="pl">Polski</option>
                  <option value="pms">Piemontèis</option>
                  <option value="pt">Português</option>
                  <option value="rm">Rumantsch</option>
                  <option value="ro">Română</option>
                  <option value="roa">Armâneashti</option>
                  <option value="roa">Tarandíne</option>
                  <option value="ru">Русский</option>
                  <option value="rue">Русиньскый</option>
                  <option value="sc">Sardu</option>
                  <option value="scn">Sicilianu</option>
                  <option value="sh">Српскохрватски</option>
                  <option value="sk">Slovenčina</option>
                  <option value="sl">Slovenščina</option>
                  <option value="sr">Српски</option>
                  <option value="stq">Seeltersk</option>
                  <option value="sv">Svenska</option>
                  <option value="szl">Ślůnski</option>
                  <option value="uk">Українська</option>
                  <option value="vec">Vèneto</option>
                  <option value="wa">Walon</option>
                  <option value="yi">ייִדיש</option>
                  <option value="zea">Zeêuws</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div id="query-button" class="left button">{{query_button}}</div>
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
    _app.init( '{{target_url}}' );
    // ]]>
    </script>
  </body>
</html>
