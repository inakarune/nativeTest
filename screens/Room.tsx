import React, { useState } from 'react'
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootStackScreenProps } from '../types'

const DATA = [
    {
        title: '최신 메세지 순',
        key: '1'
    },
    {
        title: '안 읽은 메세지 순',
        key: '2'
    },
    {
        title: '즐겨찾기 순',
        key: '3'
    },        
]
const Item = ({ title }: any) => (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

export default function RoomScreen({ navigation }: RootStackScreenProps<'Room'>) {
    const [toggleCategory, setCagetoryStatus] = useState(false)
    const renderItem = ({ item }: any) => (
        <Item title={item.title} />
    )

    const toggleBox = () => {
        if (toggleCategory) {
            return (
                <FlatList 
                    data={ DATA }
                    renderItem={ renderItem }
                    keyExtractor={ (item) => item.key }
                />
            )
        }
        else {
            return
        }
    }

    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.category } onPress={ (check) => setCagetoryStatus(!check) }>채팅</Text>
                { toggleBox() }
                <View style={ styles.room }>
                    <View style={ styles.roomImg } />
                    <View style={ styles.roomText }>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.title }>여자 개발자 친목 단톡방{ toggleCategory }</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.msg }>회사 이름이 진심 궁금dkdkdkdkdkdkdkdkdkdkdk</Text>
                    </View>
                    <Text style={ styles.date }>오후 3:42</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '15%',
        paddingLeft: '7%',
        paddingRight: '7%'
    },
    category: {
        fontWeight: 'bold',
        fontSize: 25
    },
    room: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    roomText: {
        width:  '50%'
    },
    roomImg: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'pink'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: '2.5%'
    },
    msg: {

    },
    date: {
        fontSize: 10,
        color: 'gray'
    }
})