import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function NavButton({ onPress, icon }) {
    //
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={styles.container}>
                <Ionicons
                    name={icon ? icon : "ios-add"}
                    color="orange"
                    size={20}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        borderWidth: 5,
        padding: 5
    },
});

export default NavButton;