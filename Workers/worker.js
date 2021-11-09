onmessage = (e) => {
    console.log('slave')
    const d = new Date()

    postMessage(d.getDate())

    close()
}