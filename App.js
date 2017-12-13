/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {
    count: 0,
    selected: {callCode: 49},
    data: [{"name":"Afghanistan","key":"AF","cca2":"AF","callCode":"93"},{"name":"Ägypten","key":"EG","cca2":"EG","callCode":"20"},{"name":"Åland","key":"AX","cca2":"AX","callCode":"358"},{"name":"Albanien","key":"AL","cca2":"AL","callCode":"355"},{"name":"Algerien","key":"DZ","cca2":"DZ","callCode":"213"},{"name":"Amerikanisch-Samoa","key":"AS","cca2":"AS","callCode":"1"},{"name":"Amerikanische Jungferninseln","key":"VI","cca2":"VI","callCode":"1"},{"name":"Andorra","key":"AD","cca2":"AD","callCode":"376"},{"name":"Angola","key":"AO","cca2":"AO","callCode":"244"},{"name":"Anguilla","key":"AI","cca2":"AI","callCode":"1"},{"name":"Antigua und Barbuda","key":"AG","cca2":"AG","callCode":"1"},{"name":"Äquatorialguinea","key":"GQ","cca2":"GQ","callCode":"240"},{"name":"Argentinien","key":"AR","cca2":"AR","callCode":"54"},{"name":"Armenien","key":"AM","cca2":"AM","callCode":"374"},{"name":"Aruba","key":"AW","cca2":"AW","callCode":"297"},{"name":"Aserbaidschan","key":"AZ","cca2":"AZ","callCode":"994"},{"name":"Äthiopien","key":"ET","cca2":"ET","callCode":"251"},{"name":"Australien","key":"AU","cca2":"AU","callCode":"61"},{"name":"Bahamas","key":"BS","cca2":"BS","callCode":"1"},{"name":"Bahrain","key":"BH","cca2":"BH","callCode":"973"},{"name":"Bangladesch","key":"BD","cca2":"BD","callCode":"880"},{"name":"Barbados","key":"BB","cca2":"BB","callCode":"1"},{"name":"Belgien","key":"BE","cca2":"BE","callCode":"32"},{"name":"Belize","key":"BZ","cca2":"BZ","callCode":"501"},{"name":"Benin","key":"BJ","cca2":"BJ","callCode":"229"},{"name":"Bermuda","key":"BM","cca2":"BM","callCode":"1"},{"name":"Bhutan","key":"BT","cca2":"BT","callCode":"975"},{"name":"Bolivien","key":"BO","cca2":"BO","callCode":"591"},{"name":"Bosnien und Herzegowina","key":"BA","cca2":"BA","callCode":"387"},{"name":"Botswana","key":"BW","cca2":"BW","callCode":"267"},{"name":"Brasilien","key":"BR","cca2":"BR","callCode":"55"},{"name":"Britische Jungferninseln","key":"VG","cca2":"VG","callCode":"1"},{"name":"Britisches Territorium im Indischen Ozean","key":"IO","cca2":"IO","callCode":"246"},{"name":"Brunei","key":"BN","cca2":"BN","callCode":"673"},{"name":"Bulgarien","key":"BG","cca2":"BG","callCode":"359"},{"name":"Burkina Faso","key":"BF","cca2":"BF","callCode":"226"},{"name":"Burundi","key":"BI","cca2":"BI","callCode":"257"},{"name":"Chile","key":"CL","cca2":"CL","callCode":"56"},{"name":"China","key":"CN","cca2":"CN","callCode":"86"},{"name":"Cookinseln","key":"CK","cca2":"CK","callCode":"682"},{"name":"Costa Rica","key":"CR","cca2":"CR","callCode":"506"},{"name":"Curaçao","key":"CW","cca2":"CW","callCode":"599"},{"name":"Dänemark","key":"DK","cca2":"DK","callCode":"45"},{"name":"Deutschland","key":"DE","cca2":"DE","callCode":"49"},{"name":"Dominica","key":"DM","cca2":"DM","callCode":"1"},{"name":"Dominikanische Republik","key":"DO","cca2":"DO","callCode":"1"},{"name":"Dschibuti","key":"DJ","cca2":"DJ","callCode":"253"},{"name":"Ecuador","key":"EC","cca2":"EC","callCode":"593"},{"name":"El Salvador","key":"SV","cca2":"SV","callCode":"503"},{"name":"Elfenbeinküste","key":"CI","cca2":"CI","callCode":"225"},{"name":"Eritrea","key":"ER","cca2":"ER","callCode":"291"},{"name":"Estland","key":"EE","cca2":"EE","callCode":"372"},{"name":"Falklandinseln","key":"FK","cca2":"FK","callCode":"500"},{"name":"Färöer-Inseln","key":"FO","cca2":"FO","callCode":"298"},{"name":"Fidschi","key":"FJ","cca2":"FJ","callCode":"679"},{"name":"Finnland","key":"FI","cca2":"FI","callCode":"358"},{"name":"Frankreich","key":"FR","cca2":"FR","callCode":"33"},{"name":"Französisch Guyana","key":"GF","cca2":"GF","callCode":"594"},{"name":"Französisch-Polynesien","key":"PF","cca2":"PF","callCode":"689"},{"name":"Gabun","key":"GA","cca2":"GA","callCode":"241"},{"name":"Gambia","key":"GM","cca2":"GM","callCode":"220"},{"name":"Georgien","key":"GE","cca2":"GE","callCode":"995"},{"name":"Ghana","key":"GH","cca2":"GH","callCode":"233"},{"name":"Gibraltar","key":"GI","cca2":"GI","callCode":"350"},{"name":"Grenada","key":"GD","cca2":"GD","callCode":"1"},{"name":"Griechenland","key":"GR","cca2":"GR","callCode":"30"},{"name":"Grönland","key":"GL","cca2":"GL","callCode":"299"},{"name":"Guadeloupe","key":"GP","cca2":"GP","callCode":"590"},{"name":"Guam","key":"GU","cca2":"GU","callCode":"1"},{"name":"Guatemala","key":"GT","cca2":"GT","callCode":"502"},{"name":"Guernsey","key":"GG","cca2":"GG","callCode":"44"},{"name":"Guinea","key":"GN","cca2":"GN","callCode":"224"},{"name":"Guinea-Bissau","key":"GW","cca2":"GW","callCode":"245"},{"name":"Guyana","key":"GY","cca2":"GY","callCode":"592"},{"name":"Haiti","key":"HT","cca2":"HT","callCode":"509"},{"name":"Honduras","key":"HN","cca2":"HN","callCode":"504"},{"name":"Hongkong","key":"HK","cca2":"HK","callCode":"852"},{"name":"Indien","key":"IN","cca2":"IN","callCode":"91"},{"name":"Indonesien","key":"ID","cca2":"ID","callCode":"62"},{"name":"Insel Man","key":"IM","cca2":"IM","callCode":"44"},{"name":"Irak","key":"IQ","cca2":"IQ","callCode":"964"},{"name":"Iran","key":"IR","cca2":"IR","callCode":"98"},{"name":"Irland","key":"IE","cca2":"IE","callCode":"353"},{"name":"Island","key":"IS","cca2":"IS","callCode":"354"},{"name":"Israel","key":"IL","cca2":"IL","callCode":"972"},{"name":"Italien","key":"IT","cca2":"IT","callCode":"39"},{"name":"Jamaika","key":"JM","cca2":"JM","callCode":"1"},{"name":"Japan","key":"JP","cca2":"JP","callCode":"81"},{"name":"Jemen","key":"YE","cca2":"YE","callCode":"967"},{"name":"Jersey","key":"JE","cca2":"JE","callCode":"44"},{"name":"Jordanien","key":"JO","cca2":"JO","callCode":"962"},{"name":"Kaimaninseln","key":"KY","cca2":"KY","callCode":"1"},{"name":"Kambodscha","key":"KH","cca2":"KH","callCode":"855"},{"name":"Kamerun","key":"CM","cca2":"CM","callCode":"237"},{"name":"Kanada","key":"CA","cca2":"CA","callCode":"1"},{"name":"Kap Verde","key":"CV","cca2":"CV","callCode":"238"},{"name":"Kasachstan","key":"KZ","cca2":"KZ","callCode":"7"},{"name":"Katar","key":"QA","cca2":"QA","callCode":"974"},{"name":"Kenia","key":"KE","cca2":"KE","callCode":"254"},{"name":"Kirgisistan","key":"KG","cca2":"KG","callCode":"996"},{"name":"Kiribati","key":"KI","cca2":"KI","callCode":"686"},{"name":"Kokosinseln","key":"CC","cca2":"CC","callCode":"61"},{"name":"Kolumbien","key":"CO","cca2":"CO","callCode":"57"},{"name":"Kongo","key":"CG","cca2":"CG","callCode":"242"},{"name":"Kongo (Dem. Rep.)","key":"CD","cca2":"CD","callCode":"243"},{"name":"Kroatien","key":"HR","cca2":"HR","callCode":"385"},{"name":"Kuba","key":"CU","cca2":"CU","callCode":"53"},{"name":"Kuwait","key":"KW","cca2":"KW","callCode":"965"},{"name":"Laos","key":"LA","cca2":"LA","callCode":"856"},{"name":"Lesotho","key":"LS","cca2":"LS","callCode":"266"},{"name":"Lettland","key":"LV","cca2":"LV","callCode":"371"},{"name":"Libanon","key":"LB","cca2":"LB","callCode":"961"},{"name":"Liberia","key":"LR","cca2":"LR","callCode":"231"},{"name":"Libyen","key":"LY","cca2":"LY","callCode":"218"},{"name":"Liechtenstein","key":"LI","cca2":"LI","callCode":"423"},{"name":"Litauen","key":"LT","cca2":"LT","callCode":"370"},{"name":"Luxemburg","key":"LU","cca2":"LU","callCode":"352"},{"name":"Macao","key":"MO","cca2":"MO","callCode":"853"},{"name":"Madagaskar","key":"MG","cca2":"MG","callCode":"261"},{"name":"Malawi","key":"MW","cca2":"MW","callCode":"265"},{"name":"Malaysia","key":"MY","cca2":"MY","callCode":"60"},{"name":"Malediven","key":"MV","cca2":"MV","callCode":"960"},{"name":"Mali","key":"ML","cca2":"ML","callCode":"223"},{"name":"Malta","key":"MT","cca2":"MT","callCode":"356"},{"name":"Marokko","key":"MA","cca2":"MA","callCode":"212"},{"name":"Marshallinseln","key":"MH","cca2":"MH","callCode":"692"},{"name":"Martinique","key":"MQ","cca2":"MQ","callCode":"596"},{"name":"Mauretanien","key":"MR","cca2":"MR","callCode":"222"},{"name":"Mauritius","key":"MU","cca2":"MU","callCode":"230"},{"name":"Mayotte","key":"YT","cca2":"YT","callCode":"262"},{"name":"Mazedonien","key":"MK","cca2":"MK","callCode":"389"},{"name":"Mexiko","key":"MX","cca2":"MX","callCode":"52"},{"name":"Mikronesien","key":"FM","cca2":"FM","callCode":"691"},{"name":"Moldawie","key":"MD","cca2":"MD","callCode":"373"},{"name":"Monaco","key":"MC","cca2":"MC","callCode":"377"},{"name":"Mongolei","key":"MN","cca2":"MN","callCode":"976"},{"name":"Montenegro","key":"ME","cca2":"ME","callCode":"382"},{"name":"Montserrat","key":"MS","cca2":"MS","callCode":"1"},{"name":"Mosambik","key":"MZ","cca2":"MZ","callCode":"258"},{"name":"Myanmar","key":"MM","cca2":"MM","callCode":"95"},{"name":"Namibia","key":"NA","cca2":"NA","callCode":"264"},{"name":"Nauru","key":"NR","cca2":"NR","callCode":"674"},{"name":"Népal","key":"NP","cca2":"NP","callCode":"977"},{"name":"Neukaledonien","key":"NC","cca2":"NC","callCode":"687"},{"name":"Neuseeland","key":"NZ","cca2":"NZ","callCode":"64"},{"name":"Nicaragua","key":"NI","cca2":"NI","callCode":"505"},{"name":"Niederlande","key":"NL","cca2":"NL","callCode":"31"},{"name":"Niger","key":"NE","cca2":"NE","callCode":"227"},{"name":"Nigeria","key":"NG","cca2":"NG","callCode":"234"},{"name":"Niue","key":"NU","cca2":"NU","callCode":"683"},{"name":"Nordkorea","key":"KP","cca2":"KP","callCode":"850"},{"name":"Nördliche Marianen","key":"MP","cca2":"MP","callCode":"1"},{"name":"Norfolkinsel","key":"NF","cca2":"NF","callCode":"672"},{"name":"Norwegen","key":"NO","cca2":"NO","callCode":"47"},{"name":"Oman","key":"OM","cca2":"OM","callCode":"968"},{"name":"Österreich","key":"AT","cca2":"AT","callCode":"43"},{"name":"Pakistan","key":"PK","cca2":"PK","callCode":"92"},{"name":"Palästina","key":"PS","cca2":"PS","callCode":"970"},{"name":"Palau","key":"PW","cca2":"PW","callCode":"680"},{"name":"Panama","key":"PA","cca2":"PA","callCode":"507"},{"name":"Papua-Neuguinea","key":"PG","cca2":"PG","callCode":"675"},{"name":"Paraguay","key":"PY","cca2":"PY","callCode":"595"},{"name":"Peru","key":"PE","cca2":"PE","callCode":"51"},{"name":"Philippinen","key":"PH","cca2":"PH","callCode":"63"},{"name":"Polen","key":"PL","cca2":"PL","callCode":"48"},{"name":"Portugal","key":"PT","cca2":"PT","callCode":"351"},{"name":"Puerto Rico","key":"PR","cca2":"PR","callCode":"1"},{"name":"Republik Südafrika","key":"ZA","cca2":"ZA","callCode":"27"},{"name":"Réunion","key":"RE","cca2":"RE","callCode":"262"},{"name":"Ruanda","key":"RW","cca2":"RW","callCode":"250"},{"name":"Rumänien","key":"RO","cca2":"RO","callCode":"40"},{"name":"Russland","key":"RU","cca2":"RU","callCode":"7"},{"name":"Saint Christopher und Nevis","key":"KN","cca2":"KN","callCode":"1"},{"name":"Saint Lucia","key":"LC","cca2":"LC","callCode":"1"},{"name":"Saint Martin","key":"MF","cca2":"MF","callCode":"590"},{"name":"Saint Vincent und die Grenadinen","key":"VC","cca2":"VC","callCode":"1"},{"name":"Saint-Barthélemy","key":"BL","cca2":"BL","callCode":"590"},{"name":"Saint-Pierre und Miquelon","key":"PM","cca2":"PM","callCode":"508"},{"name":"Salomonen","key":"SB","cca2":"SB","callCode":"677"},{"name":"Sambia","key":"ZM","cca2":"ZM","callCode":"260"},{"name":"Samoa","key":"WS","cca2":"WS","callCode":"685"},{"name":"San Marino","key":"SM","cca2":"SM","callCode":"378"},{"name":"São Tomé und Príncipe","key":"ST","cca2":"ST","callCode":"239"},{"name":"Saudi-Arabien","key":"SA","cca2":"SA","callCode":"966"},{"name":"Schweden","key":"SE","cca2":"SE","callCode":"46"},{"name":"Schweiz","key":"CH","cca2":"CH","callCode":"41"},{"name":"Senegal","key":"SN","cca2":"SN","callCode":"221"},{"name":"Serbien","key":"RS","cca2":"RS","callCode":"381"},{"name":"Seychellen","key":"SC","cca2":"SC","callCode":"248"},{"name":"Sierra Leone","key":"SL","cca2":"SL","callCode":"232"},{"name":"Simbabwe","key":"ZW","cca2":"ZW","callCode":"263"},{"name":"Singapur","key":"SG","cca2":"SG","callCode":"65"},{"name":"Sint Maarten","key":"SX","cca2":"SX","callCode":"1"},{"name":"Slowakei","key":"SK","cca2":"SK","callCode":"421"},{"name":"Slowenien","key":"SI","cca2":"SI","callCode":"386"},{"name":"Somalia","key":"SO","cca2":"SO","callCode":"252"},{"name":"Spanien","key":"ES","cca2":"ES","callCode":"34"},{"name":"Spitzbergen","key":"SJ","cca2":"SJ","callCode":"47"},{"name":"Sri Lanka","key":"LK","cca2":"LK","callCode":"94"},{"name":"Sudan","key":"SD","cca2":"SD","callCode":"249"},{"name":"Südkorea","key":"KR","cca2":"KR","callCode":"82"},{"name":"Südsudan","key":"SS","cca2":"SS","callCode":"211"},{"name":"Suriname","key":"SR","cca2":"SR","callCode":"597"},{"name":"Swasiland","key":"SZ","cca2":"SZ","callCode":"268"},{"name":"Syrien","key":"SY","cca2":"SY","callCode":"963"},{"name":"Tadschikistan","key":"TJ","cca2":"TJ","callCode":"992"},{"name":"Taiwan","key":"TW","cca2":"TW","callCode":"886"},{"name":"Tansania","key":"TZ","cca2":"TZ","callCode":"255"},{"name":"Thailand","key":"TH","cca2":"TH","callCode":"66"},{"name":"Timor-Leste","key":"TL","cca2":"TL","callCode":"670"},{"name":"Togo","key":"TG","cca2":"TG","callCode":"228"},{"name":"Tokelau","key":"TK","cca2":"TK","callCode":"690"},{"name":"Tonga","key":"TO","cca2":"TO","callCode":"676"},{"name":"Trinidad und Tobago","key":"TT","cca2":"TT","callCode":"1"},{"name":"Tschad","key":"TD","cca2":"TD","callCode":"235"},{"name":"Tschechische Republik","key":"CZ","cca2":"CZ","callCode":"420"},{"name":"Tunesien","key":"TN","cca2":"TN","callCode":"216"},{"name":"Türkei","key":"TR","cca2":"TR","callCode":"90"},{"name":"Turkmenistan","key":"TM","cca2":"TM","callCode":"993"},{"name":"Turks-und Caicosinseln","key":"TC","cca2":"TC","callCode":"1"},{"name":"Tuvalu","key":"TV","cca2":"TV","callCode":"688"},{"name":"Uganda","key":"UG","cca2":"UG","callCode":"256"},{"name":"Ukraine","key":"UA","cca2":"UA","callCode":"380"},{"name":"Ungarn","key":"HU","cca2":"HU","callCode":"36"},{"name":"Union der Komoren","key":"KM","cca2":"KM","callCode":"269"},{"name":"Uruguay","key":"UY","cca2":"UY","callCode":"598"},{"name":"Usbekistan","key":"UZ","cca2":"UZ","callCode":"998"},{"name":"Vanuatu","key":"VU","cca2":"VU","callCode":"678"},{"name":"Vatikanstadt","key":"VA","cca2":"VA","callCode":"39"},{"name":"Venezuela","key":"VE","cca2":"VE","callCode":"58"},{"name":"Vereinigte Arabische Emirate","key":"AE","cca2":"AE","callCode":"971"},{"name":"Vereinigte Staaten von Amerika","key":"US","cca2":"US","callCode":"1"},{"name":"Vereinigtes Königreich","key":"GB","cca2":"GB","callCode":"44"},{"name":"Vietnam","key":"VN","cca2":"VN","callCode":"84"},{"name":"Wallis und Futuna","key":"WF","cca2":"WF","callCode":"681"},{"name":"Weihnachtsinsel","key":"CX","cca2":"CX","callCode":"61"},{"name":"Weißrussland","key":"BY","cca2":"BY","callCode":"375"},{"name":"Westsahara","key":"EH","cca2":"EH","callCode":"212"},{"name":"Zentralafrikanische Republik","key":"CF","cca2":"CF","callCode":"236"},{"name":"Zypern","key":"CY","cca2":"CY","callCode":"357"}]
  }
  renderItem = ({item}) => {
    return <ListItem item={item} onPress={(item) => {
      console.log('on press', item)
      this.setState({selected: item})
    }}/>
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor: 'yellow', padding: 20}}
          onPress={() => this.setState({count: this.state.count+1})}>
          <Text>Count {this.state.count}</Text>
        </TouchableOpacity>

        <Text>selected +{this.state.selected.callCode}</Text>
        <FlatList
          style={{height: 300}}
          initialNumToRender={5}
          renderItem={this.renderItem}
          data={this.state.data}
        />
      </ScrollView>
    );
  }
}

class ListItem extends PureComponent {
  render () {
    let {item} = this.props

    if (!item) {
      return null
    }
    return (
      <TouchableOpacity
        key={item.cca2}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingVertical: 15,
        }}
        onPress={() => {
          console.log('on press')
          this.props.onPress(item)
        }}>
        <Text style={{color: '#000'}}>{item.name}</Text>
        <Text style={{color: '#CCC'}}>+{item.callCode}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
