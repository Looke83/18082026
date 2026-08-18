// API route handling the contact form submission (src/components/sections/ContactForm.astro).
// Server-rendered endpoint: validates required fields and returns JSON.
// NOTE: this project targets static output by default — enable an Astro
// SSR adapter (e.g. @astrojs/node) before deploying so this route runs.
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const service = formData.get("service")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Wymagane pola: imię i nazwisko, e-mail, wiadomość." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Podaj poprawny adres e-mail." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // TODO: podłączyć realną wysyłkę (np. SMTP / usługa transakcyjna e-mail).
    // Na etapie prototypu zgłoszenie jest tylko logowane po stronie serwera.
    console.log("[contact] Nowe zapytanie:", { name, email, phone, service, message });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Nie udało się przetworzyć formularza." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
