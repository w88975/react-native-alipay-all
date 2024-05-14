import * as React from 'react';

import { StyleSheet, View, Text, NativeModules, Button } from 'react-native';
import { multiply, alipay, authInfo } from 'react-native-alipay-all';

const { AlipayAll } = NativeModules

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    console.log(AlipayAll)
  }, []);

  const toPay = () => {
    alipay('alipay_sdk=alipay-sdk-java-dynamicVersionNo&app_id=xxxxxxxxxxxxx&biz_content={ "out_trade_no":"123123123123123", "total_amount":"0.01", "subject":"1234", "product_code":"QUICK_MSECURITY_PAY" }&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http://ane.boshu.ltd/owner/pay/api/ownerPay/callback&return_url=uiwjspay://&sign=re/+2SICQggOUjfxl7MtP/qzir2e+LdH4m+02gDcw0fkByO5MqXW/9bmXw+c4RMqo835OAjMZs7s966ZuDx2PB+hO0tJ/bzdHLLqYlBeCcETkrfwRx+AFZNgzsCn75eRCA7GONH35BpfSeGkQUZ+vNXftqd6hWaa7m/MhQYrjQcV98IVJM+UR67Gj68c+LM586cnk0+rbj8zoos6tCvN8c3xx5UaCobzw4Ogf0PWZ7PZROTU9w2gtoxFfOC5d5slN3laaAXVjAxSf9JCNs8q95fDbzpbmstQOuPgGHkASkd/beH0F8eqTVv8gW1ZTo5v/d/E2wSDGV1DciaEnCroTw==&sign_type=RSA2&timestamp=2020-07-09 09:50:41&version=1.0');
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button onPress={toPay} title='去支付'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
