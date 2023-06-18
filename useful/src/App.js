import Button from "./Button"
const App=()=> {
    return <div>
            <h1 style={{backgroundColor:"black"}}>Useful Website</h1>
            <h3 style={{textAlign:"center"}}>Which website do you want to open?</h3>
            <Button name="google" link="https://google.com"/>
            <Button name="facebook" link="https://facebook.com"/>
            <Button name="youtube" link="https:youtube.com"/>
            </div>
}

export default App;