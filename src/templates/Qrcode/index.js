import './style.css'

export default function Qrcode() {

    const qrImg = 'https://raw.githubusercontent.com/LpxsBr/Frontend-Mentor-Challenges/main/qr-code-component-main/images/image-qr-code.png'
    return (
        <>
        <div class="container">
        <div class="informations">
            <div class="qr-code">
                <img src={qrImg} alt="qr-code" title="Frontmentor Qr Code"/>
            </div>
            <div class="text">
                <h1>
                    Improve your front-end skills by building projects
                </h1>
                <p id="text">
                    scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    </div>
    </>
    )
}