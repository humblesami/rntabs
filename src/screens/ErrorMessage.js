import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
function ErrorMessage({ txt }) {
    if(txt){
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text>{txt}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else{
        return(
            <View/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 22
    },
});

export default ErrorMessage;