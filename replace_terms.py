import os
import re

directories = ['app', 'components', 'lib']

replacements = {
    # UI labels
    r'Total Allocated Budget': 'Total Planned Budget',
    r'Total Allocated': 'Total Planned',
    r'Total Encumbered': 'Reserved Funds',
    r'Total Expended': 'Total Spent',
    r'Budget Utilization Rate': 'Budget Execution Rate',
    r'Budget Utilization': 'Budget Execution',
    r'Utilized': 'Executed',
    r'Utilization': 'Execution',
    r'Encumbered': 'Reserved',
    r'Encumbrance': 'Reservation',
    r'Expended': 'Spent',
    r'Expenditures': 'Spend',
    r'Expenditure': 'Spend',
    r'Allocated': 'Planned',
    r'Allocation': 'Plan',
    # Ensure some chart keys don't break if we replace literal strings that are dataKeys.
    # Wait, in recharts, `name="Encumbered"` is what shows in exactly tooltip/legend.
    # But `dataKey="encumbered"` is the object key. 
}

def process_file(filepath):
    if not filepath.endswith(('.ts', '.tsx')):
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # We only want to replace text in display strings, but it's hard to isolate. 
    # Let's just do a direct case-sensitive replacement for capitalized versions to hit UI strings primarily.
    for old_text, new_text in replacements.items():
        # Match word boundaries to avoid replacing parts of camelCase variables (e.g. totalEncumbered)
        # However, for components like <Bar name="Encumbered" />, it will replace it nicely to <Bar name="Reserved" />
        content = re.sub(r'\b' + old_text + r'\b', new_text, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            process_file(os.path.join(root, file))
