// Company legal configuration. Update these once the details are confirmed.
// Legal content must be reviewed by qualified counsel before production use.

/** Set to a date string such as "October 7, 2026" once the policy is finalized. */
export const LEGAL_LAST_UPDATED: string | null = null;

/** Governing jurisdiction — not yet legally determined. */
export const LEGAL_GOVERNING_LAW: string | null = null;

export const CONTACT_EMAIL = "awais@windeals.me";

export const lastUpdatedLabel = () => LEGAL_LAST_UPDATED ?? "To be confirmed";
