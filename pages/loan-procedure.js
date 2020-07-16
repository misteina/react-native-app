import React from 'react';
import styles from '../styles';
import MenuBar from '../components/menubar';
import { Text, View, ScrollView } from 'react-native';


export default function LoanProcedure(){
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.procedureText}>
                    We offer loans tram &#8358;2,500 to &#8358;200,000. After repayment of the first loan of &#8358;2,500, no loan can be applied for until after 7 days. 
                </Text>
                <Text style={styles.procedureText}>
                    After a loan repayment, a customer is eligible for a doubled amount of loan. The loan list goes from &#8358;2,500, &#8358;5,000, &#8358;10,000, &#8358;20,000 up to &#8358;200,000. 
                </Text>
                <Text style={styles.procedureText}>
                    Application of loan from &#8358;20,000 to &#8358;140,000, results in an increased duration of 14 days at 30% interest rate while the duration of &#8358;80,000 to &#8358;200,000 is split into two months and interest are summed up to 30% monthly. 
                </Text>
            </ScrollView>
            <MenuBar icon="more" />
        </View>
    ); 
}