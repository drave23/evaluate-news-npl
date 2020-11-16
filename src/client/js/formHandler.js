function handleSubmit(event) {
    event.preventDefault();

    console.log("check handle submit ")


    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (checkForName(formText)) {

        console.log("::: Form Submitted :::")
        // post url to server
        fetch('http://localhost:8080/article', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'key': formText}),

        })
            .then(res => res.json())
            .then(function (res) {
                console.log(res)
                console.log(conf_score(res.confidence))

                document.querySelector('.score').innerText = `Polarity:${res.score_tag}`;
                document.querySelector('.subj').innerText = `Subjectivity:${res.subjectivity}`;
                document.querySelector('.confidence').innerText = `Confidence Level:${conf_score(res.confidence)}`;
                document.querySelector('.irony').innerText = `Tone:${res.irony}`;

            })
    }

}


export {handleSubmit}
