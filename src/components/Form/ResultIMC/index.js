import React from "react"
import { View, Text} from "react-native"
import styles from "./style";

export default function ResultIMC(props) {
    return(
        <View style={styles.viewImc}>
            <Text style={styles.message}>{props.messageResultIMC}</Text>
            <Text style={styles.result}>{props.resultIMC}</Text>
        </View>
    );
}