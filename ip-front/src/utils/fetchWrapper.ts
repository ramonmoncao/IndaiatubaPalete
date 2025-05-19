
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function fetchWrapper<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    console.log(baseUrl)
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            credentials: "include",
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        });

        
        if (response.status === 404) {
            return Promise.reject(404);
        }

        
        if (response.status === 401) {
            if (typeof window !== "undefined") {
                alert("Credenciais incorretas.");
                window.location.href = "/login";
            }
            return Promise.reject("Unauthorized");
        }

        
        if (!response.ok) {
            let errorMessage = "Erro desconhecido";
            try {
                const contentType = response.headers.get("content-type");
                if (contentType?.includes("application/json")) {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } else {
                    const text = await response.text();
                    if (text) {
                        errorMessage = text;
                    }
                }
            } catch (error) {
                console.warn("Erro ao processar corpo da resposta de erro:", error);
            }
            throw new Error(errorMessage);
        }

        
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
            return response.json();
        } else {
            const text = await response.text();
            return text as unknown as T;
        }

    } catch (error) {
        console.error("Erro no fetchWrapper:", error);
        throw error;
    }
}
