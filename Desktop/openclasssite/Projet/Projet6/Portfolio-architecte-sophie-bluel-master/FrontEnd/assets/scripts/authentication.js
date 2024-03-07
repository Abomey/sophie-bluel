
async function login(email, password) {
    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
    } else {
        throw Error("Une erreur est survenue lors de la récupération des projets.");
    }
}

function logout() {
    localStorage.removeItem("token");
}