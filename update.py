import subprocess
import time

def run_proxy():
    try:
        subprocess.run(["node", "shttp.js"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error running shttp: {e}")
def ex_proxy():
    try:
        subprocess.run(["node", "ahttp.js"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error running ahttp: {e}")
        
if __name__ == "__main__":
    while True:
        run_proxy()
        ex_proxy()
        print("Waiting for 30 minutes...")
        time.sleep(1800)  
