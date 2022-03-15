import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootStackScreenProps } from '../types'

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={ styles.container }>
            <Image resizeMode="contain" 
                style={ styles.logo } source={require('../assets/images/logo.png')} />
            <TextInput 
                style={ styles.inputBox }
                placeholder="아이디"
                onChangeText={newText => setAccount(newText)}
                defaultValue={ account }
            />
            <TextInput 
                style={ styles.inputBox }
                placeholder="비밀번호"
                onChangeText={newText => setPassword(newText)}
                defaultValue={ password }
            />
            <View style={ styles.center }>
                <Text>핑크부케 계정 찾기 | </Text>
                <Text>비밀번호 재설정</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'mistyrose',
        padding: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    inputBox: {
        width: '70%',
        height: '10%',
        backgroundColor: 'white',
        marginBottom: '5%',
        padding: '5%'
    },
    center: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        width: '70%',
        height: '70%'
    }
})
