const baseUrl: string = "http://localhost:8080";

export async function fetchWrapper<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            credentials: "include",
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        });
        if(response.status === 404){
            return Promise.reject(404);
        }
        if (response.status === 401) {
            if (typeof window !== "undefined") {
                alert("Sessão expirada. Faça login novamente.");
                window.location.href = "/login";
            }
            return Promise.reject("Unauthorized");
        }

        if (!response.ok) {
            let errorMessage = "Erro desconhecido";
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch (error) {
                throw error
            }
            throw new Error(errorMessage);
        }

        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
            return response.json();
        } else {
            return response.text() as unknown as T;
        }
    } catch (error) {
        console.error("Erro no fetchWrapper:", error);
        throw error;
    }
}
