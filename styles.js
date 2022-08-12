import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: #efefef;
`;
export const Logo = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 45px;
`;
export const NameApp = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ff8235;
    margin-bottom: 30px;
`;
export const Input = styled.TextInput`
    width: 90%;
    height: 50px;
    color: #777;
    background-color: #fff;
    border-radius: 10px;
    border-width: 1px;
    border-color: #c7c7c7;
    padding: 10px;
    margin-bottom: 15px;
`;
export const BtnGenerate = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #ff8235;
    border-radius: 10px;
    margin-bottom: 20px;
`;
export const BtnText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
export const TitleResult = styled.Text`
    font-size: 12px;
    color: #888;
    margin-bottom: 20px;
`;
export const BtnResult = styled.TouchableOpacity`
    width: 90%;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-width: 1px;
    border-color: #ff8235;
    border-radius: 5px;
    padding: 5px;
`;
export const TextResult = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #ff8235;    
`;