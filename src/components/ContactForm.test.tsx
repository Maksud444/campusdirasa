import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

// Mock fetch globally
global.fetch = vi.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render with default props', () => {
    render(<ContactForm />);

    expect(screen.getByText('نموذج تواصل')).toBeInTheDocument();
    expect(screen.getByLabelText(/الاسم الكامل/)).toBeInTheDocument();
    expect(screen.getByLabelText(/البريد الإلكتروني/)).toBeInTheDocument();
    expect(screen.getByLabelText(/الموضوع/)).toBeInTheDocument();
    expect(screen.getByLabelText(/الرسالة/)).toBeInTheDocument();
  });

  it('should render with custom title and description', () => {
    render(
      <ContactForm
        formType="request"
        title="عنوان مخصص"
        description="وصف مخصص"
      />
    );

    expect(screen.getByText('عنوان مخصص')).toBeInTheDocument();
    expect(screen.getByText('وصف مخصص')).toBeInTheDocument();
  });

  it('should update form fields on user input', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/الاسم الكامل/) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/البريد الإلكتروني/) as HTMLInputElement;
    const subjectInput = screen.getByLabelText(/الموضوع/) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/الرسالة/) as HTMLTextAreaElement;

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(subjectInput, 'Test Subject');
    await user.type(messageInput, 'This is a test message');

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(subjectInput.value).toBe('Test Subject');
    expect(messageInput.value).toBe('This is a test message');
  });

  it('should disable submit button when message is too short', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: /إرسال الرسالة/ });
    expect(submitButton).toBeDisabled();
  });

  it('should enable submit button when form is valid', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/الاسم الكامل/), 'John Doe');
    await user.type(screen.getByLabelText(/البريد الإلكتروني/), 'john@example.com');
    await user.type(screen.getByLabelText(/الموضوع/), 'Test Subject');
    await user.type(screen.getByLabelText(/الرسالة/), 'This is a test message with enough length');

    const submitButton = screen.getByRole('button', { name: /إرسال الرسالة/ });
    expect(submitButton).not.toBeDisabled();
  });

  it('should show success message on successful submission', async () => {
    const user = userEvent.setup();
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as Response);

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/الاسم الكامل/), 'John Doe');
    await user.type(screen.getByLabelText(/البريد الإلكتروني/), 'john@example.com');
    await user.type(screen.getByLabelText(/الموضوع/), 'Test Subject');
    await user.type(screen.getByLabelText(/الرسالة/), 'This is a test message with enough length');

    const submitButton = screen.getByRole('button', { name: /إرسال الرسالة/ });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('تم الإرسال بنجاح!')).toBeInTheDocument();
    });
  });

  it('should show error message on failed submission', async () => {
    const user = userEvent.setup();
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    } as Response);

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/الاسم الكامل/), 'John Doe');
    await user.type(screen.getByLabelText(/البريد الإلكتروني/), 'john@example.com');
    await user.type(screen.getByLabelText(/الموضوع/), 'Test Subject');
    await user.type(screen.getByLabelText(/الرسالة/), 'This is a test message with enough length');

    const submitButton = screen.getByRole('button', { name: /إرسال الرسالة/ });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('فشل الإرسال')).toBeInTheDocument();
    });
  });

  it('should reset form after successful submission', async () => {
    const user = userEvent.setup();
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as Response);

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/الاسم الكامل/) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/البريد الإلكتروني/) as HTMLInputElement;

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(screen.getByLabelText(/الموضوع/), 'Test Subject');
    await user.type(screen.getByLabelText(/الرسالة/), 'This is a test message with enough length');

    const submitButton = screen.getByRole('button', { name: /إرسال الرسالة/ });
    await user.click(submitButton);

    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
    });
  });

  it('should show loading state during submission', async () => {
    const user = userEvent.setup();
    let resolvePromise: (value: any) => void;
    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    vi.mocked(fetch).mockReturnValueOnce(promise as any);

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/الاسم الكامل/), 'John Doe');
    await user.type(screen.getByLabelText(/البريد الإلكتروني/), 'john@example.com');
    await user.type(screen.getByLabelText(/الموضوع/), 'Test Subject');
    await user.type(screen.getByLabelText(/الرسالة/), 'This is a test message with enough length');

    const submitButton = screen.getByRole('button', { name: /إرسال الرسالة/ });
    await user.click(submitButton);

    expect(screen.getByText('جاري الإرسال...')).toBeInTheDocument();

    // Resolve the promise
    resolvePromise!({ ok: true, json: async () => ({}) });
  });

  it('should display character count', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const messageInput = screen.getByLabelText(/الرسالة/);
    await user.type(messageInput, 'Test message');

    expect(screen.getByText(/12 حرف/)).toBeInTheDocument();
  });

  it('should handle different form types', () => {
    const { rerender } = render(<ContactForm formType="request" />);
    expect(screen.getByText('نموذج طلب خدمة')).toBeInTheDocument();

    rerender(<ContactForm formType="complaint" />);
    expect(screen.getByText('نموذج شكوى أو اقتراح')).toBeInTheDocument();

    rerender(<ContactForm formType="general" />);
    expect(screen.getByText('نموذج تواصل')).toBeInTheDocument();
  });

  it('should require all mandatory fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/الاسم الكامل/)).toBeRequired();
    expect(screen.getByLabelText(/البريد الإلكتروني/)).toBeRequired();
    expect(screen.getByLabelText(/الموضوع/)).toBeRequired();
    expect(screen.getByLabelText(/الرسالة/)).toBeRequired();
  });

  it('should handle network errors', async () => {
    const user = userEvent.setup();
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/الاسم الكامل/), 'John Doe');
    await user.type(screen.getByLabelText(/البريد الإلكتروني/), 'john@example.com');
    await user.type(screen.getByLabelText(/الموضوع/), 'Test Subject');
    await user.type(screen.getByLabelText(/الرسالة/), 'This is a test message with enough length');

    const submitButton = screen.getByRole('button', { name: /إرسال الرسالة/ });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/حدث خطأ أثناء إرسال الرسالة/)).toBeInTheDocument();
    });
  });
});
