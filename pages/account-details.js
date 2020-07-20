import React from 'react';
import styles from '../styles';
import Button from '../components/button';
import { TextInput, ScrollView, View } from 'react-native';
import { Picker } from '@react-native-community/picker';


export default function AccountDetails({navigation}) {
    const [bankAccount, setBankAccount] = React.useState(null);
    const [bank, setBank] = React.useState(null);

    const submitDetails = () => {

    }

    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.pickerBox}>
                    <Picker
                        selectedValue="select"
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setBank(itemValue)}
                    >
                        <Picker.Item label="Select Your Bank" value="select" />
                        <Picker.Item label="Access Bank" value="access" />
                        <Picker.Item label="GTBank" value="gtbank" />
                    </Picker>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Account Number"
                    placeholderTextColor="grey"
                    onChangeText={text => setBankAccount(text)}
                    value={bankAccount}
                />
                <Button title="SUBMIT" onPress={submitDetails} />
            </ScrollView>
        </View>
    );
}