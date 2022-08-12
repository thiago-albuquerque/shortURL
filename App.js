import React, { useState } from 'react';
import { Text, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import { key } from './Services/api';

import Clipboard from '@react-native-clipboard/clipboard';

import {
  Container, 
  Logo, 
  NameApp, 
  Input, 
  BtnGenerate,
  BtnText,
  TitleResult,
  BtnResult,
  TextResult 
} from './styles';

export default function App(){
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [resultUrl, setResultUrl] = useState('Resultado');

  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  
  const short = async () => {
    Keyboard.dismiss();
    setLoading(true);
    
    if(url === '' || name === ''){
      alert('Preencha todos os campos primeiro!');
      setLoading(false);
      return;
    }
    
    // Requisição da Api
    if(url.includes('http://') || url.includes('https://')){

      await fetch(`https://cutt.ly/api/api.php?key=${key}&short=${url}&name=${name}`)
      .then(async response => {
        const data = await response.json();

        if(data.url.status === 3){
          alert('Esse nome já está em uso!');
          setLoading(false);
          return;
        }
        if(data.url.status === 2){
          alert('Url é inválida!!');
          setLoading(false);
          return;
        }

        setResultUrl(data.url.shortLink);
        setLoading(false);
        setUrl('');
        setName('');
        Keyboard.dismiss();
        setBtnDisabled(false);
      })
      return;
    }
    setLoading(false);
    alert('Url inválida!');
  }

  // Copiar texto ao clicar em cima
  function copyUrl(){
    Clipboard.setString(resultUrl);
    alert('Link copiado!');
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        
        <Logo
          source={require('./Image/logo.png')}
          />

        <NameApp>Short
          <Text style={{color:'#888'}}>URL</Text>
        </NameApp>

        <Input
          keyboardType='url'
          autoCapitalize='none'
          placeholder='Cole seu link aqui'
          value={url}
          onChangeText={(valor) => setUrl(valor)}
        />

        <Input
          placeholder='Digite um nome personalizado'
          value={name}
          onChangeText={(valor) => setName(valor)}
        />

        <BtnGenerate onPress={() => short()}>
          {loading ? 
            (<ActivityIndicator size={25} color='#fff'/>) :
            (<BtnText>Gerar URL</BtnText>)
          }
        </BtnGenerate>

        <TitleResult>* Clique no link abaixo para copiar:</TitleResult>

        <BtnResult onPress={copyUrl} disabled={btnDisabled}>
          <TextResult>{resultUrl}</TextResult>
        </BtnResult>

      </Container>
    </TouchableWithoutFeedback>
  );
}