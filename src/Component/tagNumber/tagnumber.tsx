import exp from "constants"

interface data {
    title: string,
    des: string,
}
const TagNumber = (prop: data) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", marginRight: "30px" }}>
            <span style={{
                fontWeight: "bolder",
                fontSize: "20px",

            }}>
                {prop.title}
            </span>
            <span style={{ color: "blue" }}>
                {prop.des}
            </span>
        </div >
    )
}
export default TagNumber;