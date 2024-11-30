import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Handle } from "react-native";
import { router, Router } from "expo-router";
import Constants from "expo-constants";
import * as React from 'react';
import { fonts } from "../utils/fonts";

const statusBarHeight = Constants.statusBarHeight;

export default function Main() {
  return(
      <ScrollView style={styles.container}>
      <SafeAreaView style = {styles.container}>
      
      
      <Text style={styles.legbutton}>Ainda não tem uma conta?</Text>

      <TouchableOpacity onPress={()=>router.push('/screens/register')}>

        <Text style={styles.button}>Cadastre-se</Text>
       
      </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.5}/>
          
        <Text style={styles.subtitle}>BALADAS - ZONAL SUL SP</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img1}
          source={require('../Images/Imagem1.jpg') }/>
        </TouchableOpacity>

        <Text style={styles.textimg1}>Avenue</Text>
        
        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img2}
          source={require('../Images/Imagem2.jpg') }/>
        </TouchableOpacity>

        <Text style={styles.textimg2}>Amatá</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img3}
          source={require('../Images/Imagem3.jpg') }/>
        </TouchableOpacity>

        <Text style={styles.textimg3}>Vitrinni</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img4}
          source={require('../Images/Imagem4.jpg') }/>
        </TouchableOpacity>

        <Text style={styles.textimg4}>Mahau</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img5}
          source={require('../Images/Imagem5.jpg') }/>
        </TouchableOpacity>
        
        <Text style={styles.textimg5}>Galeria</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img6}
          source={require('../Images/Imagem6.jpg') }/>
        </TouchableOpacity>
        <Text style={styles.textimg6}>Vila JK</Text>
      </SafeAreaView>
      </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e1424",
  },
  backgroundImage: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: statusBarHeight + 8,

  },
  subtitle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f7f7f7',
    fontSize: 30,
    position: 'absolute',
    left: 700,
    top: 20,
    fontFamily: fonts.Jekaterina
  },
  button: {
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    position: 'absolute',
    right: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
    paddingHorizontal: 22,
    paddingTop: 9,
    top: 40
  },
  legbutton:{
    width: '20%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -50,
    top: 20,
    color: 'gray'
  },
  img1: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 100,
    left: 280,
  },
  img2: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 100,
    left: 1100
  },
  img3: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 400,
    left: 280
  },
  img4: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 400,
    left: 1100
  },
  img5: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 690,
    left: 280
  },
  img6: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 690,
    left: 1100
  },
  textimg1: {
    alignItems: "center",
    justifyContent: 'center',
    left: 420,
    marginTop: 320,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.Jekaterina
  },
  textimg2: {
    alignItems: "center",
    justifyContent: 'center',
    left: 1245,
    marginTop: 320,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.Jekaterina
  },
  textimg3: {
    alignItems: "center",
    justifyContent: 'center',
    left: 420,
    marginTop: 620,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.Jekaterina
  },
  textimg4: {
    alignItems: "center",
    justifyContent: 'center',
    left: 1245,
    marginTop: 620,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.Jekaterina
  },
  textimg5: {
    alignItems: "center",
    justifyContent: 'center',
    left: 420,
    marginTop: 900,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.Jekaterina
  },
  textimg6: {
    alignItems: "center",
    justifyContent: 'center',
    left: 1245,
    marginTop: 900,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.Jekaterina
  },

});