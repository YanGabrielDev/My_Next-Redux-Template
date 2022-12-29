export interface Button{
    text?: string
}
export const Button = ({text}: Button) => {
    return(
        <button>{text}</button>
    )
}